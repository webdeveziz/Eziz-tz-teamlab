const cities = [
    {id: '1', value: 'Амурская'},
    {id: '2', value: 'Архангельская'},
    {id: '3', value: 'Астраханская'},
    {id: '4', value: 'Белгородская'},
    {id: '5', value: 'Брянская'},
    {id: '6', value: 'Владимирская'},
    {id: '7', value: 'Волгоградская'},
    {id: '8', value: 'Вологодская'},
    {id: '9', value: 'Воронежская'},
  { id: '10', value: 'Ивановская' }
]

const select = new Select(cities)

select.init('#app')
