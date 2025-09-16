import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>thitlin906@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span>+65 82857744</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Singapore</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Follow Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="https://github.com/Lin18210" target="_blank" rel="noopener noreferrer" className='px-35'>
              <Github className="h-4 w-4 mr-2 text-amber-50" />
              <p className='text-amber-50'>GitHub</p>
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="https://www.linkedin.com/in/lin-thit-thwe2004/" target="_blank" rel="noopener noreferrer" className='px-35'>
              <Linkedin className="h-4 w-4 mr-2 text-amber-50" />
              <p className='text-amber-50'>LinkedIn</p>
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
