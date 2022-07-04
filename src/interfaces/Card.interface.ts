export interface CardSocialProps {
    children: JSX.Element
  }
  
  export interface CardProps {
    data: {
      id: number,
      nome: string,
      data: string,
      titulo: string,
      mensagem: string,
      topico: {
        id: number,
        item: string
      }[]
    }
  }