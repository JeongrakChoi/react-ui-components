import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Components List */
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Home = () => {
  return (
    <>
      <div className="container">
        <Card idName="button" title="Button">
          <Button>Button</Button> <hr />
          <Button className="bold" onClick={() => console.log('click')}>
            Button
          </Button>
          <hr />
          <Button disabled={true}>Button (Disabled)</Button>
        </Card>

        <Card idName="input" title="Input">
          <Input type="text" placeholder="Input Text" /> <hr />
          <Input className="icon mail" type="text" placeholder="Input Text + Icon" /> <hr />
          <Input className="icon password" type="text" placeholder="Input Text + Icon" /> <hr />
          <Input type="text" isValid={true} validMessage="ddd" value="Input Text (Valid)" /> <hr />
          <Input type="text" isError={true} errorMessage="ddd" value="Input Text (Error)" />
        </Card>
      </div>
    </>
  );
};

export default Home;
