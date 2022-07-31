import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import styles from "./timelines.module.scss";
interface ITimelines {}

const Timelines = ({}: ITimelines) => {
  return (
    <div className={styles.timelines}>
      <Timeline className={styles.timeline} position="right">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            32 min
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Quia quae rerum explicabo officiis beatae
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            56 min
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Voluptatem blanditiis blanditiis eveniet
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            2 hrs
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Voluptates corrupti molestias voluptatem
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            1 day
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Tempore autem saepe occaecati voluptatem tempore
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            2 days
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Est sit eum reiciendis exercitationem
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ flexGrow: 0, minWidth: "90px" }}
            color="text.secondary"
            fontSize={"inherit"}
            fontFamily={"inherit"}
          >
            4 weeks
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent fontSize={"inherit"} fontFamily={"inherit"}>
            Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Timelines;
