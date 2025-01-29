import { Loader2 , LucideProps} from "lucide-react"
import { FaGoogle, FaGithub } from "react-icons/fa"
export const Icons = {
  spinner:(props:LucideProps) => <Loader2 {...props} />,
  google:(props:React.SVGProps<SVGSVGElement>) => <FaGoogle {...props} />,
  gitHub:(props:React.SVGProps<SVGSVGElement>) => <FaGithub {...props} />
}