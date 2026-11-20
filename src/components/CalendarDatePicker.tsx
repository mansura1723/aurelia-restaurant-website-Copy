import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getTodayIsoDate, isPastIsoDate } from '../utils/validation';

interface CalendarDatePickerProps {
  selectedDate: string;
  onSelectDate: (isoDate: string) => void;
  label?: string;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function parseYearMonth(isoDate: string): { year: number; month: number } {
  const today = new Date();
  if (/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
    const [y, m] = isoDate.split('-').map(Number);
    return { year: y, month: m - 1 };
  }
  return { year: today.getFullYear(), month: today.getMonth() };
}

export function CalendarDatePicker({
  selectedDate,
  onSelectDate,
  label = 'Select Date',
}: CalendarDatePickerProps) {
  const todayIso = getTodayIsoDate();
  const initial = parseYearMonth(selectedDate || todayIso);
  const [viewYear, setViewYear] = useState(initial.year);
  const [viewMonth, setViewMonth] = useState(initial.month);

  const todayParts = parseYearMonth(todayIso);
  const isAtMinMonth =
    viewYear < todayParts.year ||
    (viewYear === todayParts.year && viewMonth <= todayParts.month);

  const calendarCells = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: Array<{ day: number | null; iso: string }> = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: null, iso: '' });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const mStr = String(viewMonth + 1).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      cells.push({ day: d, iso: `${viewYear}-${mStr}-${dStr}` });
    }
    return cells;
  }, [viewYear, viewMonth]);

  const goPrevMonth = () => {
    if (isAtMinMonth) return;
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  return (
    <div className="bg-white border border-[#E8E0D2] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] uppercase tracking-[0.16em] text-[#242424]/70 font-medium">
          {label}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrevMonth}
            disabled={isAtMinMonth}
            aria-label="Previous month"
            className="w-8 h-8 border border-[#E8E0D2] flex items-center justify-center text-[#101C2C] hover:border-[#B99A62] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-serif text-base font-semibold text-[#101C2C] min-w-[130px] text-center">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={goNextMonth}
            aria-label="Next month"
            className="w-8 h-8 border border-[#E8E0D2] flex items-center justify-center text-[#101C2C] hover:border-[#B99A62] cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-[10px] uppercase tracking-[0.12em] text-[#242424]/60 py-1 font-semibold"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarCells.map((cell, idx) => {
          if (!cell.day) {
            return <div key={`empty-${idx}`} className="h-9" />;
          }
          const isPast = isPastIsoDate(cell.iso, todayIso);
          const isSelected = cell.iso === selectedDate;
          const isToday = cell.iso === todayIso;

          return (
            <button
              key={cell.iso}
              type="button"
              disabled={isPast}
              onClick={() => onSelectDate(cell.iso)}
              aria-label={`Select ${cell.iso}`}
              aria-pressed={isSelected}
              className={`h-9 text-xs tabular-nums transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B99A62] ${
                isPast
                  ? 'text-[#242424]/25 cursor-not-allowed line-through'
                  : isSelected
                  ? 'bg-[#101C2C] text-[#F8F6F0] font-semibold border border-[#B99A62]'
                  : isToday
                  ? 'border border-[#B99A62] text-[#101C2C] font-semibold hover:bg-[#E8E0D2]/50'
                  : 'text-[#242424] hover:bg-[#E8E0D2]/60'
              }`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
