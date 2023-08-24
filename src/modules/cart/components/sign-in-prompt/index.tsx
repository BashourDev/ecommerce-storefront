import Button from "@modules/common/components/button"
import { useTranslations } from "next-intl"
import Link from "next/link"

const SignInPrompt = () => {
  const t = useTranslations("SignInPrompt");
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">{t("alreadyHaveAnAcount")}</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          {t("subtitle")}
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary">{t("signIn")}</Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
