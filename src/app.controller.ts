import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

const bio = `
Worst Wishes is a Ukrainian band performing alternative metal. It was founded in Kharkiv in 2020. The ideological beginning of the band occurred with the acquaintance of Evgeny Levchenko and Vyacheslav Kobykhno. They met in the subway passage where Vyacheslav performed on guitar, and soon enough they had an idea to form a cover band. 
After a while, they formed a full-fledged group. Danilo Butkevich left another band to become their drummer. Eugene Klimenko, who was already familiar with the band’s music, became their second guitarist at an after-gig party. Alexander Fomin, who had studied with Yevgeny in the past, became a bassist. 
Having started the writing of original songs, the band began moving away from the cover format and started to rely on their own material.
`;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bio')
  getBio(): string {
    return bio;
  }
}
