import logoImage from '../../../../../.cursor/projects/c-Users-Hp-Downloads-project-1/assets/c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_9977b1dd9e27752749b90bfffd6ff663_images_1763805206079.jpg-removebg-preview-17122a94-29f4-494d-8c7f-a357e61aacd8.png'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="Nexire"
      className={`block object-contain ${className ?? ''}`}
    />
  )
}

