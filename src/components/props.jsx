import React from "react";
// props allows a parent component to pass information to a child component. it is similar to arguments passed in a function. in props, the child component cannot mutate the data passed. its read only and it depends on the parent child to pass the data.

export default function Parent() {
  return (
    <div>
      <Child Name='Udo' />
      <Child Name='Amarachi' />
      <div className='flex justify-between gap-4'>
        <Card
          text="CareKonect made booking my doctor's appointment so easy and stress free. I found the perfect specialist in minutes"
          image='/favicon.svg'
          Name='Chimaobi'
          role='Bende Coordinator'
        />
        <Card
          text='Hello world'
          image='/favicon.svg'
          Name='John Doe'
          role='User'
        />
        <Card
          text='Default card text'
          image='/favicon.svg'
          Name='Default User'
          role='Default Role'
        />
      </div>
    </div>
  );
}

function Child({ Name }) {
  return <div>Hello {Name}</div>;
}
function Card({ text, image, Name, role }) {
  return (
    <section className='bg-blue-500 max-w-[30vw]'>
      <div className='mb-4'>{text}</div>
      <div>
        <img src={image} width='50' alt='' />
        <div className='flex gap-4'>
          <p>{Name}</p>
          <p>{role}</p>
        </div>
      </div>
    </section>
  );
}
