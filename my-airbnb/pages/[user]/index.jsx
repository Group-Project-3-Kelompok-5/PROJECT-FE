import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function UserProfile() {
  const router = useRouter();
  const user = router.query.user;

  return (
    <div>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <p>{user}</p>
      </div>
    </div>
  );
}
