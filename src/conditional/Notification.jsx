const Notification = ({ hasNewMessages, numOfMessages }) => {
  return (
    <div>
      <h4>
        Inbox has {hasNewMessages ? "new messages " : "no new messages ❌"} 📩
      </h4>
      {hasNewMessages && numOfMessages > 0 ? (
        <p>You have {numOfMessages} messages</p>
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default function Messages() {
  return (
    <Notification hasNewMessages={true} numOfMessages={0} />
  );
}
