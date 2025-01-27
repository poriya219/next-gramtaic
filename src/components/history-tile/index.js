const HistoryTile = ({history}) => {
    const formatDateTime = (datetimeString) => {
        // Parse the input datetime string
        const date = new Date(datetimeString);
    
        // Adjust the timezone (e.g., UTC+3:30 for Iran Standard Time)
        const localDate = new Date(date.getTime());
    
        // Format the Persian date and time
        const persianFormatter = new Intl.DateTimeFormat("fa-IR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
    
        return persianFormatter.format(localDate);
      };

      const postTypeTitle = (type)=>{
        console.log('get this type:', type);
        
        switch (type) {
            case 'Story':
              return 'استوری جدید';
            case 'Story':
              return 'استوری جدید';
            case 'SinglePost':
              return 'پست جدید';
            case 'CarouselPost':
              return 'آلبوم جدید';
            case 'Reels':
              return 'ریلز جدید';
            default:
              return '';
          }
      }

      const getStatusColor = (status) => {
        if (status === "200") return "bg-green-500";
        if (status === "pending") return "bg-yellow-500";
        return "bg-red-500";
      };

    return (
        <div className="flex px-6 py-2 items-center justify-between">
            
            <div className="flex flex-col">
            <p>{formatDateTime(history.scheduled_time
)}</p>
<p className="text-[#84c4eb]">{postTypeTitle(history.type)}</p>
            </div>
            <div className={`rounded-full w-4 h-4 ${getStatusColor(history.status)}`}></div>
        </div>
    );
}

export default HistoryTile;