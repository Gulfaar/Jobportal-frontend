'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Pagination } from '@/components/ui/pagination';

export default function JobListings() {
  const [salary, setSalary] = useState([5000, 99999]);

  return (
    <div className="flex p-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
        <Input placeholder="Search by Job Title" className="mb-4" />
        <Select placeholder="Choose country" className="mb-4">
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="usa">USA</SelectItem>
        </Select>
        <Select placeholder="Choose city" className="mb-4">
          <SelectItem value="chennai">Chennai</SelectItem>
          <SelectItem value="mumbai">Mumbai</SelectItem>
        </Select>
        <div className="mb-4">
          <p className="font-semibold">Category</p>
          <Checkbox label="IT & Technology" />
          <Checkbox label="Financial Services" />
          <Checkbox label="Telecommunications" />
          <Checkbox label="Marketing" />
          <Checkbox label="Education" />
        </div>
        <Slider value={salary} min={5000} max={99999} onChange={setSalary} className="mb-4" />
        <Button className="w-full">Apply</Button>
      </div>
      
      {/* Job Listings */}
      <div className="w-3/4 px-6">
        <div className="flex justify-between border-black text-black items-center mb-4">
          <p>Showing 6-6 of 10 results</p>
          <Select placeholder="Sort by latest">
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </Select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/google.png" alt="Company Logo" className="w-6 h-6" />
                  <p className="font-semibold">Software Tester</p>
                </div>
                <p className="text-sm text-gray-600">Chennai &bull; <span className="bg-orange-200 px-2 rounded">Intermediate Level</span></p>
                <p className="text-sm mt-2">As a Software Tester, you will play a critical role in ensuring the quality and reliability of our software applications...</p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="text-sm">Apply now</Button>
                  <Button variant="outline" className="text-sm">Learn more</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination className="mt-6 flex justify-center" total={3} />
      </div>
    </div>
  );
}
