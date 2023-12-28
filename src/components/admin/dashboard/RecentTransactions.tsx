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
          {/* ENUM('unpaid', 'paid', 'cancel') */}
          {data.map((transaction, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>{transaction.transaction_date}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color={
                    transaction.invoice_status === 'paid'
                      ? 'success' : transaction.invoice_status === 'unpaid'
                        ? 'warning' : transaction.invoice_status === 'cancel'
                          ? 'error' : 'grey'
                  }
                  variant="outlined"
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ overflow: 'hidden' }}>{transaction.message}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
