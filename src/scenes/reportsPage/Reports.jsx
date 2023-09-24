import React from 'react'
import LineChart from '../../components/CalendarChart'
import { Card, Heading } from '@chakra-ui/react'
import YearChart from '../../components/YearChart'
import PieChart from '../../components/PieChart'
import PlatChart from '../../components/PlatChart'
import { VStack } from '@chakra-ui/react'
import CrowdShift from '../../components/CrowdShift'
const Reports = () => {
  return (
    <>
    <VStack>
    <Card w={"73rem"} h={"40rem"} variant={"unstyled"}  >
<CrowdShift></CrowdShift>
      </Card>
    <Card  w={"68rem"} h={"40rem"} variant={"unstyled"}>
<LineChart></LineChart>
    </Card>
    
    <Card w={"73rem"} h={"30rem"} variant={"unstyled"}  >
      <YearChart></YearChart>
    </Card>
    <Card  w={"73rem"} h={"30rem"} variant={"unstyled"} mr={"12rem"} >
        <PlatChart></PlatChart>
      </Card>
    <Card w={"73rem"} h={"40rem"} variant={"unstyled"}  >
<PieChart></PieChart>
      </Card>
     
      
    </VStack>
    
    </>
   
  )
}

export default Reports