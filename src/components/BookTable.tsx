
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Check, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { toast } from 'sonner';
import TableMap from './TableMap';

const BookTable = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTableMapOpen, setIsTableMapOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  
  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];
  
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !guests || !name || !email || !phone) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    // Here you would typically send the reservation data to your backend
    console.log({ date, time, guests, name, email, phone, tableNumber: selectedTable });
    
    // Show success state
    setIsSubmitted(true);
    toast.success('Sua reserva foi enviada com sucesso!');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setDate(undefined);
      setTime('');
      setGuests('');
      setName('');
      setEmail('');
      setPhone('');
      setSelectedTable(null);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-20 px-4 bg-navy-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar size={20} className="text-accent-red" />
            <h2 className="text-lg font-medium text-accent-red">Reservas</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Reserve Sua Mesa
          </h3>
          
          <p className="text-white/80 max-w-2xl mx-auto">
            Reserve seu lugar para uma experiência gastronômica excepcional. Para grupos maiores de 8 pessoas, eventos especiais ou jantares privados, entre em contato conosco diretamente.
          </p>
        </motion.div>
        
        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Form */}
            <div className="p-8">
              <h4 className="text-2xl font-playfair font-bold text-navy-800 mb-6">
                Detalhes da Reserva
              </h4>
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check size={30} className="text-green-600" />
                  </div>
                  <h5 className="text-xl font-bold text-navy-800 mb-2">Reserva Confirmada!</h5>
                  <p className="text-slate-600">
                    Obrigado por escolher o Kitsune. Estamos ansiosos para recebê-lo.
                    {selectedTable && <span className="block mt-2">Sua mesa: #{selectedTable}</span>}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy-800">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-slate-300"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy-800">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-slate-300"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-navy-800">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="Seu telefone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-slate-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-navy-800">Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-slate-300 text-slate-700"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, 'dd/MM/yyyy') : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-navy-800">Horário</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger className="border-slate-300 bg-white text-slate-700">
                          <SelectValue placeholder="Selecione horário" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot} className="cursor-pointer">
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-navy-800">Convidados</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="border-slate-300 bg-white text-slate-700">
                          <SelectValue placeholder="Número de pessoas" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {guestOptions.map((option) => (
                              <SelectItem key={option} value={option} className="cursor-pointer">
                                {option} {option === '1' ? 'Pessoa' : 'Pessoas'}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-navy-800">Seleção de Mesa</Label>
                    <div className="flex items-center gap-2">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-slate-300 text-slate-700"
                        onClick={() => setIsTableMapOpen(true)}
                      >
                        <Map className="mr-2 h-4 w-4" />
                        {selectedTable ? `Mesa #${selectedTable} Selecionada` : "Escolha Sua Mesa"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                    >
                      Reservar Agora
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Right Column - Image */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1553247407-23251ce81f59?q=80&w=2787&auto=format&fit=crop"
                alt="Interior elegante do restaurante"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-800/40"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h5 className="text-xl font-playfair font-bold mb-4">Horário de Funcionamento</h5>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda - Quinta</span>
                      <span>11:30 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sexta - Sábado</span>
                      <span>11:30 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>12:00 - 21:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Map Dialog */}
      <TableMap
        open={isTableMapOpen}
        onOpenChange={setIsTableMapOpen}
        onTableSelect={setSelectedTable}
        selectedTable={selectedTable}
      />
    </div>
  );
};

export default BookTable;
