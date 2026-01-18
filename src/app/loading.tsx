export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                <p className="text-muted-foreground text-sm">جاري التحميل...</p>
            </div>
        </div>
    );
}
