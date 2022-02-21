import React from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined, FireFilled, ThunderboltFilled } from '@ant-design/icons';
import ElectricityAddForm from '../forms/ElectricityAddForm';
function AddElectricityButton() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button icon={<PlusOutlined />} 
        shape="round"
        type="primary" 
        onClick={showModal}>
        Ajouter un relevé <ThunderboltFilled />
      </Button>
      <Modal
        title="Ajout d'un relevé d'index"
        okText="Ajouter"
        cancelText="Annuler"
        visible={visible}
        onOk={handleOk}
        shouldCloseOnOverlayClick={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ElectricityAddForm />
      </Modal>
    </>
  );
}

export default AddElectricityButton;
