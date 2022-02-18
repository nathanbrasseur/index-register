import { Button, Space } from 'antd';
import { PlusOutlined, FireFilled, ThunderboltFilled } from '@ant-design/icons';
function AddElectricityButton() {
  return (
    <Space >
      <Button icon={<PlusOutlined />} type="primary">Add new index <ThunderboltFilled /></Button>
    </Space>
  );
}

export default AddElectricityButton;
