import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Components List */
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Check from '../components/ui/Check';
import RadioGroup from '../components/ui/RadioGroup';
import Radio from '../components/ui/Radio';

const Home = () => {
  // Check Box Code
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckChange1 = (checked: boolean) => {
    setIsChecked1(checked);
  };

  const handleCheckChange2 = (checked: boolean) => {
    setIsChecked2(checked);
  };

  const handleCheckChange3 = (checked: boolean) => {
    setIsChecked3(checked);
  };

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

        {/* CHECK BOX */}
        <Card idName="checkbox" title="Check Box">
          <Check checked={isChecked1} onChange={handleCheckChange1}>
            Checkbox 1
          </Check>
          <Check checked={isChecked2} onChange={handleCheckChange2}>
            Checkbox 2
          </Check>
          <Check checked={isChecked3} onChange={handleCheckChange3} disabled={true}>
            Checkbox 3 (Disabled)
          </Check>
        </Card>

        {/* RADIO */}
        <Card idName="radio" title="Radio">
          <RadioGroup>
            <Radio name="contact" value="EMAIL" defaultChecked>
              Radio 1
            </Radio>
            <Radio name="contact" value="PHONE">
              Radio 2
            </Radio>
            <Radio name="contact" value="FAX">
              Radio 3
            </Radio>
            <Radio name="contact" value="MAIL" disabled>
              Radio 4 (Disabled)
            </Radio>
          </RadioGroup>
        </Card>
      </div>
    </>
  );
};

export default Home;
