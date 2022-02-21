import { Button, Space } from 'antd';
import { PlusOutlined, FireFilled, ThunderboltFilled } from '@ant-design/icons';
function AddElectricityButton() {
  return (
    <>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        shape="round">
        Ajouter un relevé <FireFilled />
      </Button>
    </>
  );
}

export default AddElectricityButton;
