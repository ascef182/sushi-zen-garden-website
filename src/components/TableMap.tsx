
import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TableMapProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTableSelect: (tableId: string) => void;
  selectedTable: string | null;
}

const TableMap: React.FC<TableMapProps> = ({ open, onOpenChange, onTableSelect, selectedTable }) => {
  const areas = [
    { id: 'exterior', name: 'EXTERNO', tables: ['46', '47', '38', '36', '37', '52', '51', '49', '45', '44', '43', '42', '39', '40', '41'] },
    { id: 'interior', name: 'INTERNO', tables: ['29', '28', '27', '26', '25', '24', '30', '31', '32', '33', '34', '35', '18', '17', '16', '15', '19', '20', '21', '22', '23'] },
    { id: 'porch', name: 'VARANDA', tables: ['08', '07', '06', '05', '04', '03', '02', '01', '09', '10', '11', '12', '13', '14'] },
  ];

  const getTablePosition = (tableId: string, areaId: string) => {
    // This is a simplified positioning logic
    // In a real implementation, you would have exact coordinates for each table
    const index = areas.find(area => area.id === areaId)?.tables.indexOf(tableId) || 0;
    return {
      top: `${(Math.floor(index / 5) * 20) + 10}%`,
      left: `${(index % 5) * 20 + 10}%`,
    };
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-center">Choose Your Table</DialogTitle>
        </DialogHeader>
        
        <div className="relative bg-[#e8d9b9] p-4 rounded-lg mt-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {areas.map((area) => (
              <div key={area.id} className="text-center font-medium text-navy-800">
                {area.name}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area.id} className="relative border-r border-dashed border-slate-400 last:border-r-0 min-h-[300px]">
                {area.id === 'interior' && (
                  <div className="absolute top-[10%] left-[10%] bg-black text-white text-xs px-2 py-1 rounded">
                    SUSHI BAR
                  </div>
                )}
                
                {area.id === 'interior' && (
                  <div className="absolute top-[50%] right-[10%] bg-black text-white text-xs px-2 py-1 rounded">
                    BAR
                  </div>
                )}
                
                {area.tables.map((tableId) => (
                  <Button
                    key={tableId}
                    variant="outline"
                    className={`absolute w-10 h-10 p-0 rounded-md flex items-center justify-center text-xs font-medium ${
                      selectedTable === tableId 
                        ? 'bg-accent-red text-white hover:bg-accent-red/90' 
                        : 'bg-black text-white hover:bg-black/90'
                    }`}
                    style={getTablePosition(tableId, area.id)}
                    onClick={() => onTableSelect(tableId)}
                  >
                    {tableId}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            className="bg-accent-red text-white hover:bg-accent-red/90"
            onClick={() => onOpenChange(false)}
            disabled={!selectedTable}
          >
            Confirm Table #{selectedTable}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TableMap;
