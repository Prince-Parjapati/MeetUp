'use client'

import React from 'react'
import HomeCard from './HomeCard'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MeetingModel from './MeetingModel'

const MeetingTypeList = () => {

    const router = useRouter()

    const createMeeting = () => {
        
    }

    const [meetingState, setMeetingState] = 
    useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard imgUrl="/icons/add-meeting.svg"
        title="New Meeting"
        desc="Start an instant meeting"
        handleClick={()=> setMeetingState('isInstantMeeting')}
        className="bg-gradient-to-r from-[#3730A3] to-[#6366F1]"
        />
        <HomeCard imgUrl="/icons/schedule.svg"
        title="Schedule Meeting"
        desc="Plan your meeting"
        handleClick={()=> setMeetingState('isScheduleMeeting')}
        className="bg-gradient-to-r from-[#064E3B] to-[#10B981]"
        />
        <HomeCard imgUrl="/icons/recordings.svg"
        title="View Recordings"
        desc="Check your recordings"
        handleClick={()=> router.push('/recordings')}
        className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899]"
        />
        <HomeCard imgUrl="/icons/join-meeting.svg"
        title="Join Meeting"
        desc="Via invitation link"
        handleClick={()=> setMeetingState('isJoiningMeeting')}
        className="bg-gradient-to-r from-[#334155] to-[#64748B]"
        />

        <MeetingModel 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Start Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
        />

    </section>
  )
}

export default MeetingTypeList
