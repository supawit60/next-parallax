import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { MainContainer } from '@/components/main/main.styled';
import { ImageSlide } from '@/components/image-slide';

export const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Menu />
      <ImageSlide />
    </MainContainer>
  )
}
