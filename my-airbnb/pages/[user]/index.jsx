import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const user = router.query.user;

  return (
    <div>
      <p>{user}</p>
    </div>
  );
}
