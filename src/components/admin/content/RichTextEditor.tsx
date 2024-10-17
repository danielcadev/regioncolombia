import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { 
  Bold, 
  Italic, 
  List, 
  Heading, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Link as LinkIcon
} from 'lucide-react';

interface RichTextEditorProps {
  content?: string;
  onChange: (html: string) => void;
}

interface ToolbarButtonProps {
  onClick: () => boolean;
  isActive: boolean;
  icon: React.ElementType;
}

export function RichTextEditor({ content = '', onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false })
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-2 rounded-md transition-colors ${
        isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100'
      }`}
      type="button"
    >
      <Icon size={18} />
    </button>
  );

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 p-2 border-b flex flex-wrap gap-1">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          icon={Bold}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          icon={Italic}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          icon={List}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          icon={Heading}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          icon={AlignLeft}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          icon={AlignCenter}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          icon={AlignRight}
        />
        <ToolbarButton
          onClick={() => {
            const url = window.prompt('URL:');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
            return true;
          }}
          isActive={editor.isActive('link')}
          icon={LinkIcon}
        />
      </div>
      <EditorContent editor={editor} className="prose max-w-none p-4" />
    </div>
  );
}