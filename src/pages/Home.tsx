import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Components List */
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Check from '../components/ui/Check';
import RadioGroup from '../components/ui/RadioGroup';
import Radio from '../components/ui/Radio';
import Select from '../components/ui/Select';
import Pagination from '../components/ui/Pagination';
import Modal from '../components/ui/Modal';
import Confirm from '../components/ui/Confirm';

import ico_play from '../assets/images/common/ico_play.svg';

const Home = () => {
  // Select Box Code
  const OPTIONS = [
    { value: 'apple', name: '사과' },
    { value: 'banana', name: '바나나' },
    { value: 'orange', name: '오렌지' },
  ];

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  // Pagination Code
  const [currentPage, setCurrentPage] = useState(1);

  // Modal Code
  const [bottomModalOpen, setbottomModalOpen] = useState(false);
  const [fullModalOpen, setFullModalOpen] = useState(false);

  const openBottomModal = () => {
    setbottomModalOpen(true);
  };

  const closeBottomModal = () => {
    setbottomModalOpen(false);
  };

  const openFullModal = () => {
    setFullModalOpen(true);
  };

  const closeFullModal = () => {
    setFullModalOpen(false);
  };

  // Confirm Code
  const [confirmOpen, setConfirmOpen] = useState(false);

  const openConfirm = () => {
    setConfirmOpen(true);
  };

  const closeConfirm = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      <div className="container">
        <img src={ico_play} />

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
          <hr />
          <hr />
          <Input type="search" placeholder="Search Enter" />
        </Card>

        {/* CHECK BOX */}
        <Card idName="checkbox" title="Check Box">
          <Check />
          <Check label="checkbox2" />
          <Check disabled={true} label="checkbox disabled" />
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

        {/* SELECT */}
        <Card idName="select" title="Select (Dropdown)">
          <Select options={OPTIONS} onSelect={handleSelect} defaultText="여기를 눌러 선택" />
          <p>
            This Value : <em>{selectedValue}</em>
          </p>
        </Card>

        {/* PAGINATION */}
        <Card idName="pagination" title="Pagination">
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={10} />
          <p>
            This Paging : <em>{currentPage}</em>
          </p>
        </Card>

        {/* MODAL */}
        <Card idName="modal" title="Modal">
          <Button className="bold" onClick={openBottomModal}>
            Modal Open (Bottom Sheet)
          </Button>{' '}
          <hr />
          <Button className="bold" onClick={openFullModal}>
            Modal Open (Full Page)
          </Button>
          <Modal className="bottom" open={bottomModalOpen} close={closeBottomModal} title="Title">
            Modal Popup
          </Modal>
          <Modal className="full" open={fullModalOpen} close={closeFullModal} title="Title">
            Modal Popup
          </Modal>
        </Card>

        {/* CONFIRM */}
        <Card idName="confirm" title="Confirm">
          <Button className="bold" onClick={openConfirm}>
            Confirm Open
          </Button>

          <Confirm open={confirmOpen} close={closeConfirm} title="Title" handleClick={() => console.log('확인')}>
            Confirm Message
          </Confirm>
        </Card>
      </div>
    </>
  );
};

export default Home;
