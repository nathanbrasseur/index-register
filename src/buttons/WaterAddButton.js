import { Button, Space } from 'antd';
import { PlusOutlined, FireFilled, ThunderboltFilled } from '@ant-design/icons';
function AddElectricityButton() {
  return (
    <Space >
      <Button icon={<PlusOutlined />} type="primary">Add new index <FireFilled /></Button>
    </Space>
  );
}

export default AddElectricityButton;
