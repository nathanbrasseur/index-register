import React from 'react';
import { Button, Modal } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

export default function RemoveElectricityButton() {
  
  const showModal = () => {
    Modal.confirm({
      title: 'Confirmation',
       
      content: 'Cette action est irréversible. Êtes-vous sûr.e de vouloir continuer ?',
      icon: <ExclamationCircleOutlined />,
      okText: "Supprimer",
      cancelText: "Annuler",
      centered: true,
      okType: 'danger',
      onOk() {
        console.log('OK');
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={showModal} />
    </>
  );
}