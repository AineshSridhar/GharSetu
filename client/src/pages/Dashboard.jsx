const Dashboard = () => {
    return (
        <div className="bg-blue">
            <div className="flex justify-center min-h-screen">
                <div className="container mx-auto p-10 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-semibold text-center mb-10">Dashboard</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Task Summary */}
                        <div className="p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
                            <p className="text-sm">You have 5 active tasks</p>
                        </div>

                        {/* Budget Summary */}
                        <div className="p-4 rounded-lg shadow-md row-span-2">
                            <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
                            <p className="text-sm">Remaining budget: $500</p>
                        </div>
                        
                        {/* Maintenance Summary */}
                        <div className="p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Maintenance</h2>
                            <p className="text-sm">No pending maintenance tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;