import { ExtendedUser } from './index'

export interface UserListProps {
  users: ExtendedUser[];
  onEdit: (user: ExtendedUser) => void;
  onDelete: (user: ExtendedUser) => Promise<void>;
  onAdd: () => void;
  onRoleChange: (userId: string, newRole: "USER" | "ADMIN") => Promise<void>;
  onReactivate: (user: ExtendedUser) => Promise<void>;
  showInactiveUsers: boolean;
}