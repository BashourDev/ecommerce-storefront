import { useAccount } from "@lib/context/account-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AccountNav = () => {
  const route = usePathname()
  const { handleLogout } = useAccount()
  const locale = useLocale()
  const t = useTranslations("AccountNav")
  return (
    <div>
      <div className="small:hidden">
        {((route !== "/account") && (route !== "/ar/account")) && (
          <Link
            href="/account"
            className="flex items-center gap-x-2 text-small-regular py-2"
          >
            <>
              <ChevronDown className={`transform ${locale === "en"?"rotate-90":"-rotate-90"}`} />
              <span>{t("account")}</span>
            </>
          </Link>
        )}
      </div>
      <div className="hidden small:block">
        <div>
          <div className="py-4">
            <h3 className="text-base-semi">{t("account")}</h3>
          </div>
          <div className="text-base-regular">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink href="/account" route={route!}>
                {t("overview")}
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/profile" route={route!}>
                {t("profile")}
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/addresses" route={route!}>
                {t("addresses")}
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/orders" route={route!}>
                {t("orders")}
                </AccountNavLink>
              </li>
              <li className="text-grey-700">
                <button type="button" onClick={handleLogout}>
                {t("logOut")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
}

const AccountNavLink = ({ href, route, children }: AccountNavLinkProps) => {
  const active = route === href
  return (
    <Link
      href={href}
      className={clsx("text-gray-700", {
        "text-gray-900 font-semibold": active,
      })}
    >
      <>{children}</>
    </Link>
  )
}

export default AccountNav
