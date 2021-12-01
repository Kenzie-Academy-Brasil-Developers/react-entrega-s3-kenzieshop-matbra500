import styled from 'styled-components'

export const CardContainer = styled.div`
width: 300px;
height: 100%;
display:flex;
flex-direction:column;
justify-content: center ;
align-items: center ;
color: var(--azure);
background-color: var(--blue);
border: 2px solid var(--azure);
margin: 15px;
text-align: center;
padding:10px;

div{
    width:100%;
    height: 200px;
    display:flex;
flex-direction:column;
justify-content: center ;
align-items: center ;
}

img{
    max-width:100%;
    max-height: 100%;
}


h3{
    padding:10px;
}
`


export const AllCardsContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: center ;
align-items: center ;

@media(min-width:800px){
    flex-direction: row;
    flex-wrap: wrap ;
}
`