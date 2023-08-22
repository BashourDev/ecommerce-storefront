import Providers from "@modules/providers"
import "styles/globals.css"
import {useLocale} from 'next-intl';
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';

export default async function RootLayout({
  children,params
}: {
  children: React.ReactNode,
  params:any
}) {
  const locale = useLocale();
  
  if(params.locale !== locale){
    notFound()
  }
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body dir={params.locale === "en"? "ltr":"rtl"}>
        <Providers>       
          <NextIntlClientProvider locale={locale} messages={messages}>
            <main className="relative">{children}</main>        
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
