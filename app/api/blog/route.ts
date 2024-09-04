import { NextRequest, NextResponse } from 'next/server';
import { Client } from "@notionhq/client";
import { BlogPostData } from '@/src/types/blog';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('id');

        let filter = {};
        if (postId) {
            filter = {
                property: 'ID',
                number: {
                    equals: parseInt(postId)
                }
            };
        }

        const response = await notion.databases.query({
            database_id: databaseId!,
            filter: postId ? filter : undefined,
            sorts: [
                {
                    property: 'PublishedDate',
                    direction: 'descending',
                }
            ],
        });

        const blogPosts = response.results.map(convertNotionPageToBlogPost);
        return NextResponse.json(blogPosts);
    } catch (error: unknown) {
        console.error('Error fetching blog posts:', error);
        return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (session?.user?.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const blogPost: BlogPostData = await request.json();
        // Aquí iría la lógica para crear un nuevo post en Notion
        // Por ahora, solo devolveremos el post recibido
        return NextResponse.json(blogPost, { status: 201 });
    } catch (error: unknown) {
        console.error('Error creating blog post:', error);
        return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
    }
}

function convertNotionPageToBlogPost(page: any): BlogPostData {
    // Implementa esta función según la estructura de tus páginas en Notion
    // Este es solo un ejemplo
    return {
        id: page.id,
        title: page.properties.Title.title[0]?.plain_text || '',
        content: page.properties.Content.rich_text[0]?.plain_text || '',
        author: page.properties.Author.rich_text[0]?.plain_text || '',
        publishedDate: page.properties.PublishedDate.date?.start || '',
        // ... otros campos
    };
}