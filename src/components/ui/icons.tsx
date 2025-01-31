import { Loader2 , LucideProps} from "lucide-react"
import {  FaFacebook, FaTiktok } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
export const Icons = {
  spinner:(props:LucideProps) => <Loader2 {...props} />,
  google:(props:React.SVGProps<SVGSVGElement>) => <FcGoogle {...props} />,
  facebook:(props:React.SVGProps<SVGSVGElement>) => <FaFacebook  {...props} />,
  tiktok:(props:React.SVGProps<SVGSVGElement>) => <FaTiktok {...props} />,
}