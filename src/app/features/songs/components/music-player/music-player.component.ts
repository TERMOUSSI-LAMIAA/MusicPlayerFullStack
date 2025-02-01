import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AudioService } from '../../../../core/services/audio.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  audioUrl: string | undefined;
  error: string | undefined;
  debug: any = {};
  private routeSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private audioService: AudioService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      const songId = params['songId'];
      if (songId) {
        this.loadAudioFile(songId);
      } else {
        this.error = 'No song ID provided';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
    }
  }

  private loadAudioFile(songId: string): void {
    this.error = undefined;
    this.audioUrl = undefined;

    this.audioService.getAudioStream(songId).subscribe({
      next: (arrayBuffer: ArrayBuffer) => {
        try {
          // Vérifiez si l'ArrayBuffer est valide et non vide
          if (arrayBuffer.byteLength === 0) {
            throw new Error('Received empty audio file');
          }

          const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
          this.debug.blobSize = blob.size;
          this.debug.blobType = blob.type;

          this.audioUrl = URL.createObjectURL(blob);
          this.debug.audioUrl = this.audioUrl;
        } catch (error) {
          console.error('Error processing audio data:', error);
          this.error = 'Failed to process audio file';
          this.debug.error = error;
        }
      },
      error: (error) => {
        console.error('Error fetching audio:', error);
        this.error = 'Failed to load audio file';
        this.debug.httpError = error;
      }
    });
  }

  handleAudioError(event: any): void {
    console.error('Audio element error:', event);
    this.error = 'Error playing audio file';
    this.debug.audioElementError = event.target.error;
  }

  handleAudioLoaded(): void {
    console.log('Audio loaded successfully');
    this.debug.audioLoaded = true;
  }
}
