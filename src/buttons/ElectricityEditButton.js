import React from 'react';
import { Button, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ElectricityUpdateForm from '../forms/ElectricityUpdateForm';

export default function EditElectricityButton() {

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
      <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={showModal} />
      <Modal
        title="Modification d'un relevé d'index"
        okText="Mettre à jour"
        centered
        cancelText="Annuler"
        visible={visible}
        onOk={handleOk}
        shouldCloseOnOverlayClick={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ElectricityUpdateForm />
      </Modal>
    </>
  );
}