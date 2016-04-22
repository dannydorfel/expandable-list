import React from 'react'
import List from '../components/list/List'

import Collapsed from '../components/item/Collapsed'
import Detail from '../components/item/Detail'

import data from '../data/jumps.json'

export default () => (
    <List data={data} collapsed={Collapsed} detail={Detail} />
)
