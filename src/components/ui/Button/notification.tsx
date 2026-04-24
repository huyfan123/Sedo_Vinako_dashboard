import {Button} from 'antd'
import { BellOutlined } from '@ant-design/icons';

export const Notification = () => {
  return (
    <Button style={{
      padding: '10px',
      borderRadius: '100%',
      border: 'none', 
    }}>
      <BellOutlined 
        style={{
          fontSize: '18px',
          color: '#000',
        }}
      />
    </Button>
  )
}
