import { Popover, Button } from 'antd';

import React from 'react'

const SearchPop = () => {
    const [visible ,setVisible] = useState(false)
    return (
        <div>
                 <Popover
        content={<a onClick={()=>setVisible(true)}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover> 
        </div>
    )
}

export default SearchPop
