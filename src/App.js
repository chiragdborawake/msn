import React from 'react';
import Header from './Header';
import Fields from './Fields';
import Body from './Body';

const fieldsData= [
  {
    items:[
      'Hotmail',
      'Messages',
      'My MSN',
      'MSN Directory'
    ]
  },
  {
    items:[
      'Air Tickets/Travel',
      'Autos',
      'Careers & Jobs',
      'City Guides',
      'Dating & Personals'
    ]
  },
  {
    items:[
      'Election 2008',
      'Games',
      'Green Living',
      'Health & Fitness',
      'Horoscope'
    ]
  },
  {
    items:[
      'Lifestyle',
      'Maps & Directions',
      'Money',
      'Movie',
      'Music'
    ]
  },
  {
   items:[
     'News',
     'Real Estate/Rentals',
     'Showing',
     'Spaces',
     'Sports'
   ]
  },
  {
    items:[
      'Tech & Budgets',
      'TV',
      'Weather',
      'White Pages',
      'Yellow Pages'
    ]
  }
  ];


function App() {
  return (
    <div className="App">
      <Header/>
      <Fields fieldsData = {fieldsData} />
      <Body/>
    </div>
  );
}

export default App;
