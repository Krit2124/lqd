"use client"
import { Header } from '@/widgets/Header';
import GlobalStyles from './styles';


export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h1>Hello, Next.js with Emotion!</h1>
    </div>
  );
}
