type NavProps = {
    onSyncedClick: () => void;
    onListClick: () => void;
  };
export function Nav({ onSyncedClick, onListClick }: NavProps) {
    return (
      <nav>
        <button onClick={onSyncedClick}>Synced</button>
        <button onClick={onListClick}>List</button>
      </nav>
    );
  }