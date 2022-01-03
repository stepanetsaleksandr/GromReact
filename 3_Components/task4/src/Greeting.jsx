import React from 'react';

const DEFAULT_YEAR = 1970;
/* 
1. Получаем дату рождения и переводим в милисекунды
2. получаем настоящее время в миллисек. и отнимаем от него пункт 1)
3. берем getYears от получившегося
*/
const getAge = birthDate => {
  const age = new Date().getTime() - birthDate.getTime();
  return new Date(age).getFullYear() - DEFAULT_YEAR;
};

const Greeting = props => {
  const element = (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}
    </div>
  );

  return element;
};

export default Greeting;
