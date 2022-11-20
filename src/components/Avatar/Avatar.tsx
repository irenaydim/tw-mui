import { useMemo } from 'react';

export interface AvatarProps {
  firstName?: string,
  lastName?: string,
  url?: string
}

const Avatar = ({ firstName = '', lastName = '', url = '' }: AvatarProps) => {
  const initials = useMemo(() => `${firstName[0]}${lastName[0]}`.toUpperCase(), [firstName, lastName])

  return <div>
    {url ? url : initials ? initials : 'FB'}
  </div>
}

export default Avatar
