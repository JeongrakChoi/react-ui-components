import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Components List */
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import RadioGroup from '../components/ui/RadioGroup';
import Radio from '../components/ui/Radio';

const Home = () => {
  return (
    <>
      <div className="container">
        {/* BUTTON */}
        <Card idName="button" title="Button">
          <Button>Button</Button> <hr />
          <Button className="bold" onClick={() => console.log('click')}>
            Button
          </Button>
          <hr />
          <Button disabled={true}>Button (Disabled)</Button>
        </Card>

        {/* INPUT */}
        <Card idName="input" title="Input">
          <Input type="text" placeholder="Input Text" /> <hr />
          <Input className="icon mail" type="text" placeholder="Input Text + Icon" /> <hr />
          <Input className="icon password" type="text" placeholder="Input Text + Icon" /> <hr />
          <Input
            type="text"
            isValid={true}
            validMessage={['Valid message 1', 'Valid message 2']}
            value="Input Text (Valid)"
          />{' '}
          <hr />
          <Input
            type="text"
            isError={true}
            errorMessage={['Error Message 1', 'Error Message 2']}
            value="Input Text (Error)"
          />
          <hr />
          <Input type="text" placeholder="Input Text (Disabled)" disabled={true} />
        </Card>

        {/* RADIO */}
        <Card idName="radio" title="Radio">
          <RadioGroup>
            <Radio name="contact" value="EMAIL" defaultChecked>
              Radio1
            </Radio>
            <Radio name="contact" value="PHONE">
              Radio2
            </Radio>
            <Radio name="contact" value="FAX">
              Radio3
            </Radio>
            <Radio name="contact" value="MAIL" disabled>
              Radio (Disabled)
            </Radio>
          </RadioGroup>
        </Card>
      </div>
    </>
  );
};

export default Home;
