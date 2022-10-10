import { Container, ScrollArea } from '@mantine/core';
import { HeaderResponsive, HeaderResponsiveProps } from './app-header';
import { TableSort } from './table-ws';

export default function Shell() {
  const _links : HeaderResponsiveProps = {
    links : [
      {
        link:"#",
        label:"Home"
      },
      {
        link:"#1",
        label:"Products"
      },
      {
        link:"#2",
        label:"Sales"
      },
      {
        link:"#3",
        label:"Purchases"
      },
      {
        link:"#4",
        label:"Inventory"
      },
      {
        link:"#5",
        label:"Sign up"
      },
      {
        link:"#6",
        label:"Sign in"
      }
    ]
  };

  return (
    <ScrollArea style={{ height: '90vh' }} mt={60}>
        <HeaderResponsive links={_links.links}/>
          <Container>
            <TableSort data={[
              {name:"Yousef Ahmed Yousef",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef1",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef2",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef3",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef4",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef5",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef6",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef7",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef8",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef9",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef10",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef11",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef12",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef13",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef14",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef15",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef16",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef17",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef18",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"},
              {name:"Yousef Ahmed Yousef19",email:"example@mobtaker.co",company:"Mobtaker", department:"IT", "job title":"Developer"}
            ]}/>
          </Container>
      </ScrollArea>

  );
}
