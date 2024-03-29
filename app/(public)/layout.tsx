import './globals.css'
import Provider from '../provider'

export const metadata = {
  title: 'Login - Stringo',
  description: 'Criado por @oiRyder',
  icons: {
    icon : ['/favicon.ico?v=4']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="pt-br">
      <body>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  )
}
