import './globals.css';

export const metadata = {
  title: 'BeFitter - White Label AI Fitness App for Gyms',
  description: 'Empower your gym & elevate member experience with your own branded AI fitness app. Drive retention, boost trainer efficiency, and increase revenue.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}