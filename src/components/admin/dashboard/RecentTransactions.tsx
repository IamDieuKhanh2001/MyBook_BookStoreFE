"use client"
import React from 'react';
import DashboardCard from '../../shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';
import useAPIStatistic from '@/lib/hooks/api/useAPIStatistic';

const RecentTransactions = () => {
  const { getRecentTransactions } = useAPIStatistic()
  const { data, isLoading } = getRecentTransactions(5)

  return (
    <DashboardCard title="Giao dịch gần đây">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '20px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          {data.map((transaction, index) => (
            <TimelineItem key={index}>
              {transaction.invoice_status}
              <TimelineOppositeContent>{transaction.transaction_date}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{transaction.message}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
