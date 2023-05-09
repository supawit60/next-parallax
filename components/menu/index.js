import { LinkGroup, MenuContainer } from '@/components/menu/menu.styled';

export const Menu = () => {
  return (
    <MenuContainer>
      <LinkGroup href='/'>home</LinkGroup>
      <LinkGroup href='/'>about</LinkGroup>
      <LinkGroup href='/'>contact us</LinkGroup>
    </MenuContainer>
  )
}
